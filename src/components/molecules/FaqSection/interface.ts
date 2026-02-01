export interface IFaqItem {
  id: string | number
  question: string
  answer: string
}

export interface IAccordionItemProps {
  number: number
  question: string
  answer: string
  isOpenInitial?: boolean
}
