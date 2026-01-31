export interface AccordionItemProps {
  number: number
  question: string
  answer: string
  isOpenInitial?: boolean
}

export interface FaqData {
  id: number | string
  question: string
  answer: string
}
