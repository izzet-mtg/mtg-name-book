import useSWRImmutable from "swr/immutable"
import * as z from "zod"

const CardImageUris = z.object({
  small: z.url(),
  normal: z.url(),
  large: z.url(),
  png: z.url()
})
export type CardImageUris = z.infer<typeof CardImageUris>
const Card = z.object({
  scryfall_uri: z.url(),
  name: z.string(),
  printed_name: z.string().optional(),
  image_uris: CardImageUris.optional()
})
export type Card = z.infer<typeof Card>
const CardList = z.object({
  data: z.array(Card)
})
export type CardList = z.infer<typeof CardList>
export type Response<Cards extends Array<unknown>, Error> = {
  cards: Cards
  error: Error
  isLoading: boolean
}

const fetcher = (name: string) =>
  fetch(
    `https://api.scryfall.com/cards/search?q=${encodeURIComponent(name)}+lang:any`
  ).then((response) => response.json())

const useCardSearch = (name?: string): Response<Card[], any> => {
  const {
    data: response,
    error: apiError,
    isLoading
  } = useSWRImmutable(name, fetcher)
  if (apiError) {
    return { cards: [], error: apiError, isLoading }
  }
  if (isLoading || !response) {
    return { cards: [], error: undefined, isLoading }
  }

  const { data, error, success } = CardList.safeParse(response)
  if (!success) {
    return { cards: [], error, isLoading: false }
  }
  return { cards: data.data, error: undefined, isLoading: false }
}

export default useCardSearch
