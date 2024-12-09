import { supabaseAdmin } from '../lib/supabase';

const CHICAGO_API = 'https://data.cityofchicago.org/resource/s6ha-ppgi.json';

export async function syncChicagoData() {
  try {
    const response = await fetch(CHICAGO_API);
    const data = await response.json();

    // Transform Chicago data
    const listings = data.map((item: any) => ({
      title: item.property_name,
      description: `${item.property_type} managed by ${item.management_company}`,
      address: item.address,
      location: `ST_GeomFromText('POINT(${item.longitude} ${item.latitude})', 4326)`,
      price: 0,
      bedrooms: 0,
      bathrooms: 0,
      square_feet: 0,
      photos: [],
      amenities: []
    }));

    // Clear existing listings
    await supabaseAdmin
      .from('listings')
      .delete()
      .not('id', 'is', null);

    // Insert new listings
    const { error } = await supabaseAdmin
      .from('listings')
      .insert(listings);

    if (error) {
      console.error('Insert error:', error);
      throw error;
    }
    
    console.log(`Synced ${listings.length} listings`);
    return { success: true, count: listings.length };
  } catch (error) {
    console.error('Sync error:', error);
    return { success: false, error };
  }
} 