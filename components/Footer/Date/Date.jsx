import { useEffect, useState } from 'react'
import moment from 'moment'

const DateForm = () => {

  const [currenDate, setCurrenDate] = useState('')

  useEffect(() => {
    setInterval(() => {
      const dateMoment = moment().utcOffset('-05')
        .format('dddd MMMM YYYY, hh:mm:ss a')
        setCurrenDate(dateMoment)
    }, 1000);
  }, []);

  return (
    <div>
      <div className='mt-3'> {currenDate}</div>
    </div>
  )
}

export default DateForm
