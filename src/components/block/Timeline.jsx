import TimelineItem from "./TimelineItem";

const Timeline = ({ items }) => {
  return (
    <div className="common__timeline">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <TimelineItem
            key={index}
            item={item}
            index={index}
            isLast={isLast}
            delay={index * 0.6}
          />
        );
      })}
    </div>
  )
}

export default Timeline;