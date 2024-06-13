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
import { useStopwatch } from 'react-timer-hook'

function MyStopwatch() {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: false })

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>react-timer-hook</h1>
      <p>Stopwatch Demo</p>
      <div style={{ fontSize: '100px' }}>
        <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <button onClick={start}>Start</button>
      <button onClick={pause}>Pause</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

const invoices = [
  {
    ID: '1',
    TEAM: 'INV001',
    REAL_TIME: 'Paid',
    NUMBRE_OF_WASTE: '$250.00',
    POINTS: '0',
    TOTAL_POINTS: '0',
  },
  {
    ID: '2',
    TEAM: 'INV002',
    REAL_TIME: 'Paid',
    NUMBRE_OF_WASTE: '$250.00',
    POINTS: '0',
    TOTAL_POINTS: '0',
  },
  {
    ID: '3',
    TEAM: 'INV003',
    REAL_TIME: 'Paid',
    NUMBRE_OF_WASTE: '$250.00',
    POINTS: '0',
    TOTAL_POINTS: '0',
  },
  {
    ID: '4',
    TEAM: 'INV004',
    REAL_TIME: 'Paid',
    NUMBRE_OF_WASTE: '$250.00',
    POINTS: '0',
    TOTAL_POINTS: '0',
  },
  {
    ID: '5',
    TEAM: 'INV005',
    REAL_TIME: 'Paid',
    NUMBRE_OF_WASTE: '$250.00',
    POINTS: '0',
    TOTAL_POINTS: '0',
  },
  {
    ID: '6',
    TEAM: 'INV006',
    REAL_TIME: 'Paid',
    NUMBRE_OF_WASTE: '$250.00',
    POINTS: '0',
    TOTAL_POINTS: '0',
  },
  {
    ID: '7',
    TEAM: 'INV007',
    REAL_TIME: 'Paid',
    NUMBRE_OF_WASTE: '$250.00',
    POINTS: '0',
    TOTAL_POINTS: '0',
  },
]

export function Resault() {
  const [openModalEdit, setOpenModalEdit] = useState(false)

  const handleEditClick = (invoices: IResault) => {
    setOpenModalEdit(true)
    //   setTaskToEdit(task)
    //   setNewTaskValue(task.text)
  }
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
            <DialogTitle>Edit Task</DialogTitle>
            <DialogDescription>
              Make changes to your task here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Pedro Duarte" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input id="username" value="@peduarte" className="col-span-3" />
            </div>
            <div>
              <MyStopwatch />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
