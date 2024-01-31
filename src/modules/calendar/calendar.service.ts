import { Calendar } from "./calendar.model";
import { CalendarType } from "./calendar.type";

const getAllCalendar = async (): Promise<CalendarType[]> => {
  const calendars = await Calendar.find({});

  return calendars;
};

const postCalendar = async (calendarData: CalendarType) => {
  const existingCal = await Calendar.find({
    year: calendarData.year,
  });
  if (!existingCal[0]?.id) {
    const postCalendar = new Calendar(calendarData);
    const newCalendar = await postCalendar.save();
    return newCalendar;
  }
};

const updateCalendar = async (id: string, update: any) => {
  const updatedCalendar = await Calendar.updateOne(
    {
      _id: id,
    },
    {
      $unset: {
        year: "",
        holidays: "",
        events: "",
      },
    }
  );

  await Calendar.updateOne(
    { _id: id },
    {
      $set: {
        year: update?.year,
        holidays: update?.holidays,
        events: update?.events,
      },
    }
  ).clone();

  return updatedCalendar;
};

const calendarDelete = async (id: string) => {
  const deletedCalendar = await Calendar.findByIdAndDelete(id);
  return deletedCalendar;
};

export const calendarService = {
  getAllCalendar,
  postCalendar,
  updateCalendar,
  calendarDelete,
};
