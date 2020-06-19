import React from "react";
import PropTypes from "prop-types";

const TargetRole = (props) => {

  return (
    <section >
      <div>
        <select>
          <option key="unset" value="unset">
            Select role
          </option>
          {props.roles.map((role, idx) => (
            <option key={idx} value={idx}>
              {role.name}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
}

TargetRole.propTypes = { 
    roles: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
      }).isRequired
    ).isRequired
 };

export default TargetRole;