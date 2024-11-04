import type { Category, Event, FullEvent } from '@/interfaces'
import { apiUrl } from '@/utils'

export const getEvents = async (): Promise<Event[]> => {
  try {
    const response = await fetch(`${ apiUrl }/v1/events?timestamp=${new Date().getTime()}&per_page=8`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching Events:", error)
    return []
  }
}

export const getEvent = async ( id: string ): Promise<FullEvent | null> => {
  try {
    const response = await fetch(`${ apiUrl }/tribe/events/v1/events/${ id }?timestamp=${new Date().getTime()}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching Events:", error)
    return null
  }
}

export const getCategory = async ( slug: string ): Promise<Event[]> => {
  try {
    const response = await fetch(`${ apiUrl }/v1/events?category=${ slug }&timestamp=${new Date().getTime()}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching Category:", error)
    return []
  }
}

export const getCategoryName = async ( id: string ): Promise< Category | null > => {
  try {
    const response = await fetch(`${ apiUrl }/tribe/events/v1/categories/${ id }`)
    const data = await response.json()
    console.log("Category data:", data); // Verifica la estructura aquí
    return data
  } catch (error) {
    console.error("Error fetching Category:", error)
    return null
  }
}

export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await fetch(`${ apiUrl }/v1/event-categories?timestamp=${new Date().getTime()}`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching Categories:", error)
    return []
  }
}