import {useLocation, useParams} from "react-router-dom";
import {useNavigate} from "react-router";

export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
        <Component
            {...props}
            {...{location, navigate, params}}
        />
    );
  }

  return ComponentWithRouterProp;
}
