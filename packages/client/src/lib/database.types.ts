export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      developers: {
        Row: {
          id: string
          name: string
          email: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          created_at?: string
        }
      }
      listings: {
        Row: {
          id: string
          developer_id: string | null
          title: string
          description: string | null
          address: string
          location: unknown
          price: number
          bedrooms: number
          bathrooms: number
          square_feet: number
          photos: string[]
          amenities: string[]
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          developer_id?: string | null
          title: string
          description?: string | null
          address: string
          location: unknown
          price: number
          bedrooms: number
          bathrooms: number
          square_feet: number
          photos?: string[]
          amenities?: string[]
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          developer_id?: string | null
          title?: string
          description?: string | null
          address?: string
          location?: unknown
          price?: number
          bedrooms?: number
          bathrooms?: number
          square_feet?: number
          photos?: string[]
          amenities?: string[]
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
