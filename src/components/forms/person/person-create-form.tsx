"use client";

import React, {useState} from 'react';
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {SelectFormItem} from "@/lib/definitions";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover";
import {cn} from "@/lib/utils";
import {format} from "date-fns";
import {Calendar} from "@/components/ui/calendar";
import {CalendarDays} from "lucide-react";
import {useToast} from "@/hooks/use-toast";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";

const personCreateFormSchema = z.object({
  name: z.string().min(0).max(10),
  country: z.string(),
  birthday: z.date(),
  sex: z.string(),
})

interface PersonCreateFormProps {
  countrySelectItems: SelectFormItem[]
}

function PersonCreateForm({
  countrySelectItems,
}: PersonCreateFormProps) {
  const {toast} = useToast()
  const [calendarOpen, setCalendarOpen] = useState(false);

  const form = useForm<z.infer<typeof personCreateFormSchema>>({
    resolver: zodResolver(personCreateFormSchema),
    defaultValues: {
      name: "",
    },
  })

  function onSubmit(values: z.infer<typeof personCreateFormSchema>) {
    toast({
      title: "submit data",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      )
    })
  }

  return (
    <Form {...form}>
      <form  onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* 이름 */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-64">
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="username" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* 국적 */}
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem className="w-64">
              <FormLabel>Country</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {countrySelectItems.map((item) => (
                    <SelectItem key={item.value} value={item.value}>{item.label} ({item.value})</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormDescription>Person nationality</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* 생일 */}
        <FormField
          control={form.control}
          name="birthday"
          render={({ field }) => (
            <FormItem className="flex flex-col w-64">
              <FormLabel>Date of birth</FormLabel>
              <Popover open={calendarOpen} onOpenChange={setCalendarOpen}>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn("pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarDays className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={(newDate) => { field.onChange(newDate); setCalendarOpen(false); }}
                    disabled={(date) => date > new Date() || date < new Date("1900-01-01")}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Date of birth
              </FormDescription>
            </FormItem>
          )}
        />
        {/* 성별 */}
        <FormField
          control={form.control}
          name="sex"
          render={({ field }) => (
            <FormItem className="flex flex-col w-64">
              <FormLabel>Sex</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex space-x-6"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="male" />
                    </FormControl>
                    <FormLabel>
                      Male
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="female" />
                    </FormControl>
                    <FormLabel>
                      Female
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

export default PersonCreateForm;