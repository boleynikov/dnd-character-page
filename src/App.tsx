import { toast } from 'sonner'
import './App.css'
import { Accordion } from './components/retroui/Accordion'
import { Alert } from './components/retroui/Alert'
import { Badge } from './components/retroui/Badge'
import { Breadcrumb } from './components/retroui/Breadcrump'
import { Button } from './components/retroui/Button'
import { Card } from './components/retroui/Card'
import { Checkbox } from './components/retroui/Checkbox'
import { Dialog } from './components/retroui/Dialog'
import { Input } from './components/retroui/Input'
import { Label } from './components/retroui/Label'
import { Menu } from './components/retroui/Menu'
import { Popover } from './components/retroui/Popover'
import { RadioGroup } from './components/retroui/Radio'
import { Select } from './components/retroui/Select'
import { Slider } from './components/retroui/Slider'
import { Text } from './components/retroui/Text'
import { Toaster } from './components/retroui/Sonner'
import { Switch } from './components/retroui/Switch'
import { Tabs, TabsContent, TabsPanels, TabsTrigger, TabsTriggerList } from './components/retroui/Tab'
import { useState } from 'react'
import { Table } from './components/retroui/Table'
import { Tooltip } from './components/retroui/Tooltip'

const employees = [
  {
    id: "1",
    name: "Alice Johnson",
    role: "Software Engineer",
    department: "Engineering",
    status: "Active",
    salary: "85,000",
  },
  {
    id: "2",
    name: "Bob Smith",
    role: "Product Manager",
    department: "Product",
    status: "Active",
    salary: "95,000",
  },
  {
    id: "3",
    name: "Carol Williams",
    role: "Designer",
    department: "Design",
    status: "On Leave",
    salary: "70,000",
  },
  {
    id: "4",
    name: "David Brown",
    role: "DevOps Engineer",
    department: "Engineering",
    status: "Active",
    salary: "90,000",
  },
  {
    id: "5",
    name: "Eve Davis",
    role: "QA Engineer",
    department: "Engineering",
    status: "Active",
    salary: "75,000",
  },
  {
    id: "6",
    name: "Frank Wilson",
    role: "Marketing Manager",
    department: "Marketing",
    status: "Inactive",
    salary: "80,000",
  },
]

function App() {
  const onClick = () => {
    toast.success("Congrats man (Colored) 🎉", {
      richColors: true,
    });
  };

  const [selectedEmployees, setSelectedEmployees] = useState<Set<string>>(new Set())

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedEmployees(new Set(employees.map(emp => emp.id)))
    } else {
      setSelectedEmployees(new Set())
    }
  }

  const handleSelectEmployee = (employeeId: string, checked: boolean) => {
    const newSelected = new Set(selectedEmployees)
    if (checked) {
      newSelected.add(employeeId)
    } else {
      newSelected.delete(employeeId)
    }
    setSelectedEmployees(newSelected)
  }

  const isAllSelected = selectedEmployees.size === employees.length
  const isIndeterminate = selectedEmployees.size > 0 && selectedEmployees.size < employees.length

  return (
    <>
      <Toaster />
      <Button variant={'secondary'} onClick={() => onClick()}>Click me!</Button>
      <Accordion type="single" collapsible className="space-y-4 w-full">
        <Accordion.Item value="item-1">
          <Accordion.Header>Accordion Item 1</Accordion.Header>
          <Accordion.Content>
            This is the content of the first accordion item.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Header>Accordion Item 2</Accordion.Header>
          <Accordion.Content>
            This is the content of the second accordion item.
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Header>Accordion Item 3</Accordion.Header>
          <Accordion.Content>
            This is the content of the third accordion item.
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>

      <Alert>
        <Alert.Title>Heads up!</Alert.Title>
        <Alert.Description>
          This is where you can write description that no one reads...
        </Alert.Description>
      </Alert>

      <Badge>Default Badge</Badge>

      <Breadcrumb>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Link href="/components">Components</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator />
          <Breadcrumb.Item>
            <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb>

      <Popover>
        <Popover.Trigger asChild>
          <Button>Open Popover</Button>
        </Popover.Trigger>
        <Popover.Content className="w-80 font-sans">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Dimensions</h4>
              <p className="text-sm text-muted-foreground">
                Set the dimensions for the layer.
              </p>
            </div>

            <div className="grid gap-2">
              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="width">Width</Label>

                <Input
                  id="width"
                  defaultValue="100%"
                  className="col-span-2 h-8"
                />
              </div>

              <div className="grid grid-cols-3 items-center gap-4">
                <Label htmlFor="height">Height</Label>

                <Input
                  id="height"
                  defaultValue="25px"
                  className="col-span-2 h-8"
                />
              </div>
            </div>
          </div>
        </Popover.Content>
      </Popover>

      <Card className="w-[350px] shadow-none hover:shadow-none">
        <Card.Content className="pb-0">
          <img
            src="https://media.gamestop.com/i/gamestop/20016290/Clair%20Obscur%20Expedition%2033%20Trailer.webp"
            className="w-full h-full"
            alt="clair obscur expedition 33"
          />
        </Card.Content>
        <Card.Header className="pb-0">
          <Card.Title>Classic 8-bit Gameboy</Card.Title>
        </Card.Header>
        <Card.Content className="flex justify-between items-center">
          <p className="text-lg font-semibold">$29.90</p>
          <Button>Add to cart</Button>
        </Card.Content>
      </Card>

      <div className="flex gap-2 items-center">
        <Checkbox />
        <Text>Accept terms and conditions</Text>
      </div>

      <Menu>
        <Menu.Trigger asChild>
          <Button>Menu</Button>
        </Menu.Trigger>
        <Menu.Content className="min-w-36">
          <Menu.Item>Menu Item 1</Menu.Item>
          <Menu.Item>Menu Item 2</Menu.Item>
          <Menu.Item>Menu Item 3</Menu.Item>
        </Menu.Content>
      </Menu>

      <Dialog>
        <Dialog.Trigger asChild>
          <Button>Open Dialog</Button>
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header>
            <Text as="h5">Confirm your action?</Text>
          </Dialog.Header>
          <section className="flex flex-col gap-4 p-4">
            <section className="text-xl">
              <p>Are you sure you want to delete this item?</p>
              <p>This action cannout be undone.</p>
            </section>
            <section className="flex w-full justify-end">
              <Dialog.Trigger asChild>
                <Button>Confirm</Button>
              </Dialog.Trigger>
            </section>
          </section>
        </Dialog.Content>
      </Dialog>

      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label htmlFor="pokemon">Favorite Pokemon</Label>
        <Input type="pokemon" id="pokemon" placeholder="Charmander" />
      </div>

      <div className="flex gap-4">
        <RadioGroup>
          <div className="flex items-center space-x-2">
            <RadioGroup.Item value="default" variant="default" />
            <label htmlFor="default">Default Style</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroup.Item value="outline" variant="outline" />
            <label htmlFor="outline">Outline Style</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroup.Item value="solid" variant="solid" />
            <label htmlFor="solid">Solid Style</label>
          </div>
        </RadioGroup>
      </div>

      <Select>
        <Select.Trigger className="w-60">
          <Select.Value placeholder="Pick your Pokemon" />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Item value="pikachu">Pikachu</Select.Item>
            <Select.Item value="charizard">Charizard</Select.Item>
            <Select.Item value="bulbasaur">Bulbasaur</Select.Item>
            <Select.Item value="squirtle">Squirtle</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select>

      <div className="w-[400px]">
        <Slider
          defaultValue={[50]}
          min={0}
          max={100}
          step={1}
          aria-label="Slider Control"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Switch id="notification" />
        <label htmlFor="notification">Email Notifications</label>
      </div>

      <Tabs>
        <TabsTriggerList>
          <TabsTrigger>Home</TabsTrigger>
          <TabsTrigger>About</TabsTrigger>
          <TabsTrigger>Contact</TabsTrigger>
        </TabsTriggerList>
        <TabsPanels>
          <TabsContent>
            Welcome to RetroUI, a retro styled UI library built with React,
            Tailwind CSS & Headless UI.
          </TabsContent>
          <TabsContent>This is the about section!</TabsContent>
          <TabsContent>And, this is the contact section!</TabsContent>
        </TabsPanels>
      </Tabs>

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.Head className="w-[50px]">
              <Checkbox
                checked={isAllSelected}
                onCheckedChange={handleSelectAll}
              />
            </Table.Head>
            <Table.Head>Name</Table.Head>
            <Table.Head>Role</Table.Head>
            <Table.Head>Department</Table.Head>
            <Table.Head>Status</Table.Head>
            <Table.Head className="text-right">Salary</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {employees.map((employee) => (
            <Table.Row key={employee.id}>
              <Table.Cell>
                <Checkbox
                  checked={selectedEmployees.has(employee.id)}
                  onCheckedChange={(checked) => handleSelectEmployee(employee.id, Boolean(checked))}
                />
              </Table.Cell>
              <Table.Cell className="font-medium">{employee.name}</Table.Cell>
              <Table.Cell>{employee.role}</Table.Cell>
              <Table.Cell>{employee.department}</Table.Cell>
              <Table.Cell>
                <Badge
                  variant={employee.status === 'Active' ? 'default' : employee.status === 'On Leave' ? 'outline' : 'solid'}
                  size="sm"
                >
                  {employee.status}
                </Badge>
              </Table.Cell>
              <Table.Cell className="text-right">$ {employee.salary}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.Cell colSpan={5}>Selected: {selectedEmployees.size} / {employees.length}</Table.Cell>
            <Table.Cell className="text-right font-semibold">$ {employees.reduce((total, employee) => total + Number(employee.salary.replace(',', '')), 0)}</Table.Cell>
          </Table.Row>
        </Table.Footer>
      </Table>

      <Tooltip.Provider>
        <Tooltip>
          <Tooltip.Trigger asChild>
            <Button variant="outline">Hover</Button>
          </Tooltip.Trigger>
          <Tooltip.Content variant="default">Add to Library</Tooltip.Content>
        </Tooltip>
      </Tooltip.Provider>
    </>
  )
}

export default App
