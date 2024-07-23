import {
  CalendarContainer,
  CalendarPeriod,
  CalendarTtlSubttl, CalendrDateControl, DateControl, Calendarier
} from "./Calendar.styled.js";

import {format} from "date-fns";
import {ru} from "date-fns/locale";


const Calendar = ({date, setDate}) => {
  const formatedDate = date ? format(date, "dd.MM.yy", { locale: ru }) : ""

  return (
    <CalendarContainer>
      <CalendarTtlSubttl>Даты</CalendarTtlSubttl>
      <Calendarier locale={ru} mode="single" required selected={date} onSelect={setDate}/>
      <input type="hidden" id="datepick_value" value={formatedDate}/>
      <CalendarPeriod>
        {
          !formatedDate
            ? <CalendrDateControl>Выберите дату в календаре</CalendrDateControl>

            : <CalendrDateControl>
              Срок исполнения: <DateControl>{formatedDate}</DateControl>
            </CalendrDateControl>
        }
      </CalendarPeriod>
    </CalendarContainer>
  );
}

export default Calendar
