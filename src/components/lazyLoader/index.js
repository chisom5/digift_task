import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const LoadingMessage = () => (
  <div className="spinner_container">
    <div className="spin">
      <Spin
        size="small"
        indicator={
          <LoadingOutlined style={{ fontSize: 24, color: "#005EB8" }} spin />
        }
      />
    </div>
  </div>
);

export default LoadingMessage;
