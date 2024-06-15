'use client'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import { FaEdit } from 'react-icons/fa'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { IResault } from '@/types/types'
import { useState } from 'react'
import { Button } from './ui/button'
import { MyStopwatch } from './StopWatch'

const initialInvoices = [
  {
    ID: '1',
    TEAM: 'INV001',
    REAL_TIME: '00:00:00',
    NUMBRE_OF_WASTE: 0,
    POINTS: '0',
    TOTAL_POINTS: '0',
  },
  {
    ID: '2',
    TEAM: 'INV002',
    REAL_TIME: '00:00:00',
    NUMBRE_OF_WASTE: 0,
    POINTS: '0',
    TOTAL_POINTS: '0',
  },
  {
    ID: '3',
    TEAM: 'INV003',
    REAL_TIME: '00:00:00',
    NUMBRE_OF_WASTE: 0,
    POINTS: '0',
    TOTAL_POINTS: '0',
  },
  {
    ID: '4',
    TEAM: 'INV004',
    REAL_TIME: '00:00:00',
    NUMBRE_OF_WASTE: 0,
    POINTS: '0',
    TOTAL_POINTS: '0',
  },
  {
    ID: '5',
    TEAM: 'INV005',
    REAL_TIME: '00:00:00',
    NUMBRE_OF_WASTE: 0,
    POINTS: '0',
    TOTAL_POINTS: '0',
  },
  {
    ID: '6',
    TEAM: 'INV006',
    REAL_TIME: '00:00:00',
    NUMBRE_OF_WASTE: 0,
    POINTS: '0',
    TOTAL_POINTS: '0',
  },
  {
    ID: '7',
    TEAM: 'INV007',
    REAL_TIME: '00:00:00',
    NUMBRE_OF_WASTE: 0,
    POINTS: '0',
    TOTAL_POINTS: '0',
  },
]

export function Resault() {
  const [invoices, setInvoices] = useState(initialInvoices)
  const [openModalEdit, setOpenModalEdit] = useState(false)
  const [selectedInvoice, setSelectedInvoice] = useState<IResault | null>(null)
  const [wasteCount, setWasteCount] = useState<number>(0)

  const handleEditClick = (invoices: IResault) => {
    setSelectedInvoice(invoices)
    setWasteCount(invoices.NUMBRE_OF_WASTE)
    setOpenModalEdit(true)
  }

  const handleSaveChanges = () => {
    if (selectedInvoice) {
      setInvoices((prevInvoices) =>
        prevInvoices.map((invoice) =>
          invoice.ID === selectedInvoice.ID
            ? { ...invoice, NUMBRE_OF_WASTE: wasteCount }
            : invoice
        )
      )
      setOpenModalEdit(false)
    }
  }

  const handleStopwatchStop = (time: string) => {
    if (selectedInvoice) {
      setInvoices((prevInvoices) =>
        prevInvoices.map((invoice) =>
          invoice.ID === selectedInvoice.ID
            ? { ...invoice, REAL_TIME: time }
            : invoice
        )
      )
    }
  }

  const incrementWaste = () => setWasteCount((prevCount) => prevCount + 1)
  const decrementWaste = () =>
    setWasteCount((prevCount) => Math.max(prevCount - 1, 0))

  return (
    <div className=" w-[1440px]">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">TEAM</TableHead>
            <TableHead>REAL TIME</TableHead>
            <TableHead>NUMBRE OF WASTE</TableHead>
            <TableHead className="text-right">POINTS</TableHead>
            <TableHead className="text-right">TOTAL POINTS</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.TEAM}>
              <TableCell className="font-medium">{invoice.TEAM}</TableCell>
              <TableCell className="font-medium">{invoice.REAL_TIME}</TableCell>
              <TableCell>{invoice.NUMBRE_OF_WASTE}</TableCell>
              <TableCell className=" text-right">{invoice.POINTS}</TableCell>
              <TableCell className="text-right">
                {invoice.TOTAL_POINTS}
              </TableCell>
              <TableCell className="text-right">
                <FaEdit
                  onClick={() => handleEditClick(invoice)}
                  cursor="pointer"
                  className=" text-blue-500"
                  size={20}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={openModalEdit} onOpenChange={setOpenModalEdit}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className=" text-center font-bold text-4xl">
              {selectedInvoice?.TEAM}
            </DialogTitle>
            <DialogDescription className=" text-center">
              Make changes to {selectedInvoice?.TEAM} here. Click save when
              you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="waste" className="text-right">
                Numbre of Waste
              </Label>
              <div className="col-span-3 flex items-center">
                <Button onClick={decrementWaste}>-</Button>
                <Input
                  id="waste"
                  value={wasteCount}
                  readOnly
                  className="mx-2"
                />
                <Button onClick={incrementWaste}>+</Button>
              </div>
            </div>
            <div>
              <MyStopwatch onStop={handleStopwatchStop} />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" onClick={handleSaveChanges}>
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
