
// const ActivityDetails = ({ activity }) => {
//   return (
//     <div className="workout-details">
//       <h4>{activity.activityTitle}</h4>
//       <p><strong>Description: </strong>{activity.description}</p>
//       <p><strong>Activity Type: </strong>{activity.activityType}</p>
//       <p><strong>Duration: </strong>{activity.duration}</p>
//       <p><strong>Date: </strong>{activity.date}</p>
//       <p>{activity.createdAt}</p>
//     </div>
//   );
// };

// export default ActivityDetails;

import PropTypes from "prop-types";

const ActivityDetails = ({ activity }) => {
  return (
    <div className="activity-details">
      
      <h4>{activity.activityTitle}</h4>
      <p>
        <strong>Description: </strong>
        {activity.description}
      </p>
      <p>
        <strong>Activity Type: </strong>
        {activity.activityType}
      </p>
      <p>
        <strong>Duration: </strong>
        {activity.duration}
      </p>
      <p>
        <strong>Date: </strong>
        {activity.date}
      </p>
      <p>{activity.createdAt}</p>
    </div>
  );
};

ActivityDetails.propTypes = {
  activity: PropTypes.shape({
    activityTitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    activityType: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
};

export default ActivityDetails;

