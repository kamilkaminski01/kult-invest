export interface ICriterion {
  lead: string
  text: string
}

export interface CriteriaListProps {
  title: string
  items: ICriterion[]
  variant: 'buy' | 'avoid'
}
