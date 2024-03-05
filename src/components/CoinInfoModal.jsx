import { Divider, Flex, Tag, Typography } from "antd";
import {
  RedditOutlined,
  TwitterOutlined,
  ChromeOutlined,
} from "@ant-design/icons";
import CoinInfo from "./CoinInfo";

export default function CoinInfoModal({ coin }) {
  return (
    <>
      <CoinInfo coin={coin} withSymbol/>
      <Divider />
      <Typography.Paragraph>
        <Typography.Text strong>1 hour: </Typography.Text>
        <Tag color={coin.priceChange1h > 0 ? "green" : "red"}>
          {coin.priceChange1h}%
        </Tag>
        <Typography.Text strong>1 day: </Typography.Text>
        <Tag color={coin.priceChange1d > 0 ? "green" : "red"}>
          {coin.priceChange1d}%
        </Tag>
        <Typography.Text strong>1 week: </Typography.Text>
        <Tag color={coin.priceChange1w > 0 ? "green" : "red"}>
          {coin.priceChange1w}%
        </Tag>
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Price: </Typography.Text>
        {coin.price.toFixed(2)}$
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Price BTC: </Typography.Text>
        {coin.priceBtc}
      </Typography.Paragraph>
      <Typography.Paragraph>
        <Typography.Text strong>Market Cap: </Typography.Text>
        {coin.marketCap}$
      </Typography.Paragraph>
      {coin.contractAddress && (
        <Typography.Paragraph>
          <Typography.Text strong>Contract Address: </Typography.Text>
          {coin.contractAddress}
        </Typography.Paragraph>
      )}
      <Typography.Paragraph style={{ margin: 0 }}>
        <a href={coin.twitterUrl}>
          <Tag style={{ padding: 5 }} color="#55acee">
            <TwitterOutlined style={{ fontSize: 15, marginRight: 5 }} />
            Twitter
          </Tag>
        </a>
        <a href={coin.redditUrl}>
          <Tag color="#FF4500" style={{ padding: 5 }}>
            <RedditOutlined style={{ fontSize: 15, marginRight: 5 }} />
            Reddit
          </Tag>
        </a>
        <a href={coin.websiteUrl}>
          <Tag color="#3A5796" style={{ padding: 5 }}>
            <ChromeOutlined style={{ fontSize: 15, marginRight: 5 }} />
            Website
          </Tag>
        </a>
      </Typography.Paragraph>
    </>
  );
}
