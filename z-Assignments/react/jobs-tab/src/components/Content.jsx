import { AiFillCaretRight } from "react-icons/ai";
export default function Content({ data, activeIndex, setActiveIndex }) {
  return (
    data.map((d, index) => {
      if (index == activeIndex) {
        return (<div key={index}>
          <h2 className="job-title">{d.title}</h2>
          <p className="company-name">{d.company}</p>
          <p className="date">{d.dates}</p>
          {d.duties.map((content) => {
            return (
              <div className="text">
                <AiFillCaretRight />
                <p>{content}</p>
              </div>
            );
          })}
        </div>)
      }

    })

  )

}
