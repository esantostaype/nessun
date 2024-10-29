import type { Event, Category, FullEvent } from '@/interfaces'
import { apiUrl } from '@/utils'

export const getEvents = async (): Promise<Event[]> => {
  try {
    const response = await fetch(`${ apiUrl }/v1/events`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching Events:", error)
    return []
  }
}

export const getEvent = async ( id: string ): Promise<FullEvent | null> => {
  try {
    const response = await fetch(`${ apiUrl }/tribe/events/v1/events/${ id }`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching Events:", error)
    return null
  }
}

export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch(`${ apiUrl }/v1/event-categories`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching Categories:", error)
    return []
  }
}