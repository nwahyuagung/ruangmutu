import { Image, Tag, Typography } from "antd";
import { Card } from "../../../atoms/Card/Card";

import "./SatisficationServiceCard.less";
import Thumbnail from "../../../../assets/images/keluhan_pelanggan.png";
import { Text } from "../../../atoms/Text/Text";
import moment from "moment";
import { LockOutlined } from "@ant-design/icons";

export const SatisficationServiceCard = ({ onOpenPreview, cardData }) => {
  return (
    <>
      <Card className="quality-indicator-card">
        <div className="thumbnail">
          <Image
            src={Thumbnail}
            preview={false}
            onClick={onOpenPreview}
            style={{ width: "100px" }}
          />
        </div>
        <div className="tag" style={{ justifyContent: "start" }}>
          <Tag color="#6A9695" style={{ fontSize: 9 }}>
            {cardData?.program?.name ?? ""}
          </Tag>
        </div>
        <div className="content">
          <span title={cardData.report}>
            <Text className="title" style={{ lineHeight: "10px" }}>
              {cardData.report.substr(0, 20)}
            </Text>
          </span>
          <p className="info">
            {moment(cardData.created_at).format("DD MMM YYYY")}
          </p>
          <Typography
            style={{
              fontSize: "12px",
              fontWeight: "300",
              color: cardData.is_public ? "green" : "red",
            }}
          >
            <LockOutlined /> {cardData.is_public === 0 ? "Rahasia" : "Publik"}
          </Typography>
        </div>
      </Card>
    </>
  );
};
