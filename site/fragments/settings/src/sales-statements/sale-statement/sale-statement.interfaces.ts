import { ReactNode } from 'react'

export interface Statement {
  date: string
  amount: number
}

export interface SaleStatementProps {
  statements: Array<Statement>
  year: string | number | ReactNode
}
