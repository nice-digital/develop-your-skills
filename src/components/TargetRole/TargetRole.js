import React from "react";
import PropTypes from "prop-types";

const TargetRole = ({roles, setRoleSelected}) => {

  return (
    <section >
      <div>
        <select data-testid="role-select"  onChange={e => setRoleSelected(parseInt(e.target.value))}>
          <option key="unset" value="unset">
            Select role
          </option>
          {roles.map((role, idx) => (
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
    ).isRequired,
    setRoleSelected: PropTypes.func.isRequired
 };

export default TargetRole;