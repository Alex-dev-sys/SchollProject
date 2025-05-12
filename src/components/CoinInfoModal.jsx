import {Divider, Tag, Typography} from "antd"
import CoinInfo from "./CoinInfo.jsx";


export default function CoinInfoModal({coin}) {
  return (<>
      <CoinInfo coin={coin} withSymbol/>
      <Divider/>
      <Typography.Paragraph>
        <Typography.Text strong>1 hour:</Typography.Text>
        <Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>{coin.priceChange1h}%</Tag><Tag/>
        <Typography.Text strong>1 day:</Typography.Text>
        <Tag color={coin.priceChange1d > 0 ? 'green' : 'red'}>{coin.priceChange1d}%</Tag><Tag/>
        <Typography.Text strong>1 week:</Typography.Text>
        <Tag color={coin.priceChange1w > 0 ? 'green' : 'red'}>{coin.priceChange1w}%</Tag><Tag/>
      </Typography.Paragraph>
      <Typography.Paragraph> <Typography.Text strong>Price:</Typography.Text> <Tag
        color={'geekblue'}>{coin.price.toFixed(2)}$</Tag><Tag/></Typography.Paragraph>
      <Typography.Paragraph> <Typography.Text strong>Price BTC:</Typography.Text> <Tag
        color={'purple'}>{coin.priceBtc}</Tag><Tag/></Typography.Paragraph>
      <Typography.Paragraph> <Typography.Text strong>Market Cap:</Typography.Text> <Tag
        color={'cyan'}>{coin.marketCap}$</Tag><Tag/></Typography.Paragraph>
      {coin.contractAddress && <Typography.Paragraph> <Typography.Text strong>Contract Adress:</Typography.Text> <Tag
        color={'lime'}>{coin.contractAddress}</Tag><Tag/></Typography.Paragraph>}
    </>
  )
}
    
