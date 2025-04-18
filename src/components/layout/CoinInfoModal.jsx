import { Divider, Flex, Tag, Typography } from "antd"


export default function CoinInfoModal({coin}){
  return ( <>
    <Flex align = "senter"  >
      <img 
      src={coin.icon} 
      alt= {coin.name} 
      style = {{width: 40, marginRight: 10}} />
      <Typography.Title   
        level = {2} 
        style={{margin: 0}}> 
        ({coin.symbol}) 
        {coin.name} 
        </ Typography.Title>
      </Flex>
      <Divider/>
      <Typography.Paragraph>
        <Typography.Text strong>1 hour:</Typography.Text>
        <Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>{coin.priceChange1h}%</Tag><Tag/>
        <Typography.Text strong>1 day:</Typography.Text>
        <Tag color={coin.priceChange1d > 0 ? 'green' : 'red'}>{coin.priceChange1d}%</Tag><Tag/>
        <Typography.Text strong>1 week:</Typography.Text>
        <Tag color={coin.priceChange1w > 0 ? 'green' : 'red'}>{coin.priceChange1w}%</Tag><Tag/>
        </Typography.Paragraph>
        <Typography.Paragraph> <Typography.Text strong>Price:</Typography.Text> <Tag color={'geekblue'}>{coin.price.toFixed(2)}$</Tag><Tag/></Typography.Paragraph>
        <Typography.Paragraph> <Typography.Text strong>Price BTC:</Typography.Text> <Tag color={'purple'}>{coin.priceBtc}</Tag><Tag/></Typography.Paragraph>
        <Typography.Paragraph> <Typography.Text strong>Market Cap:</Typography.Text> <Tag color={'cyan'}>{coin.marketCap}$</Tag><Tag/></Typography.Paragraph>
        {coin.contractAddress && <Typography.Paragraph> <Typography.Text strong>Contract Adress:</Typography.Text> <Tag color={'lime'}>{coin.contractAddress}</Tag><Tag/></Typography.Paragraph>}
      </>
      )
    }
    
