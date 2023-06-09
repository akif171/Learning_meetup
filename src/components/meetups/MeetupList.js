import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => {
        return (
          <MeetupItem
            key={meetup.id}
            id={meetup.id}
            title={meetup.title}
            address={meetup.address}
            image={meetup.image}
            description={meetup.description}
          />
        );
      })}
    </ul>
  );
}

export default MeetupList;
