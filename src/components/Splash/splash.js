import React from "react";
import SplashMobile from "../../assets/throne_mobile.jpg";

function SplashImage() {
  return (
    <div className="splash-background">
      <div className="splash-foreground">
        <img src={SplashMobile} alt="" />
      </div>
    </div>
  );
}

export function Splash(WrappedComponentd) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true
      };
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({
          loading: false
        });
      }, 5000);
    }

    render() {
      if (this.state.loading) return SplashImage();

      return <WrappedComponentd {...this.props} />;
    }
  };
}
