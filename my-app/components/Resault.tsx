import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const invoices = [
  {
    TEAM: 'INV001',
    REAL_TIME: 'Paid',
    NUMBRE_OF_WASTE: '$250.00',
    POINTS: 'Credit Card',
    TOTAL_POINTS: '0',
  },
  {
    TEAM: 'INV002',
    REAL_TIME: 'Paid',
    NUMBRE_OF_WASTE: '$250.00',
    POINTS: 'Credit Card',
    TOTAL_POINTS: 0,
  },
  {
    TEAM: 'INV003',
    REAL_TIME: 'Paid',
    NUMBRE_OF_WASTE: '$250.00',
    POINTS: 'Credit Card',
    TOTAL_POINTS: 0,
  },
  {
    TEAM: 'INV004',
    REAL_TIME: 'Paid',
    NUMBRE_OF_WASTE: '$250.00',
    POINTS: 'Credit Card',
    TOTAL_POINTS: 0,
  },
  {
    TEAM: 'INV005',
    REAL_TIME: 'Paid',
    NUMBRE_OF_WASTE: '$250.00',
    POINTS: 'Credit Card',
    TOTAL_POINTS: 0,
  },
  {
    TEAM: 'INV006',
    REAL_TIME: 'Paid',
    NUMBRE_OF_WASTE: '$250.00',
    POINTS: 'Credit Card',
    TOTAL_POINTS: 0,
  },
  {
    TEAM: 'INV007',
    REAL_TIME: 'Paid',
    NUMBRE_OF_WASTE: '$250.00',
    POINTS: 'Credit Card',
    TOTAL_POINTS: 0,
  },
]

export function Resault() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">TEAM</TableHead>
          <TableHead>REAL TIME</TableHead>
          <TableHead>NUMBRE OF WASTE</TableHead>
          <TableHead className="text-right">POINTS</TableHead>
          <TableHead className="text-right">TOTAL POINTS</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.TEAM}>
            <TableCell className="font-medium">{invoice.REAL_TIME}</TableCell>
            <TableCell>{invoice.NUMBRE_OF_WASTE}</TableCell>
            <TableCell>{invoice.POINTS}</TableCell>
            <TableCell className="text-right">{invoice.TOTAL_POINTS}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  )
}
