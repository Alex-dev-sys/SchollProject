import {Button, Drawer, Layout, Modal, Select, Space} from 'antd';
import {useCrypto} from '../../context/crypto-context';
import {useEffect, useState} from 'react';
import CoinInfoModal from '../CoinInfoModal.jsx';
import AddAssetForm from '../AddAssetForm.jsx';

const headerStyle = {
  width: '100%',
  textAlign: 'center',
  height: 60,
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}
const handleChange = value => {
  console.log(`selected ${value}`);
}

export default function AppHeader() {
  const [select, setSelect] = useState(false)
  const [modal, setModal] = useState(false)
  const [coin, setCoin] = useState(null)
  const [drawer, setDrawer] = useState(true)
  const {crypto} = useCrypto()


  useEffect(() => {
    const keypress = (event) => {
      if (event.key === '/') {
        setSelect((prev) => !prev)
      }
    }
    document.addEventListener('keypress', keypress)
    return () => document.removeEventListener('keypress', keypress)
  }, [])

  function handleSelect(value) {
    setCoin(crypto.find(c => c.id === value))
    setModal(true)
  }

  return (
    <Layout.Header style={headerStyle}>
      <Select

        style={{
          width: 200
        }}
        open={select}
        onClick={() => setSelect((prev) => !prev)}
        onSelect={handleSelect}
        value='press/ to open'
        options={crypto.map((coin) => ({
          label: coin.name,
          value: coin.id,
          icon: coin.icon,
        }))}
        optionRender={option => (
          <Space>
            <img style={{width: 20}} src={option.data.icon} alt={option.data.label}/> {option.data.label}
          </Space>
        )}

      />
      <Button type="primary" onClick={() => setDrawer(true)}> Add asset </Button>

      <Modal
        open={modal}
        onOk={() => setModal(false)}
        onCancel={() => setModal(false)}
        footer={null}
      >
        <CoinInfoModal coin={coin}/>
      </Modal>
      <Drawer title='Add Asset'
              onClose={() => setDrawer(false)}
              open={drawer} width={540}
              destroyOnClose
      >
        <AddAssetForm onclose={() => setDrawer(false)}/>
      </Drawer>
    </Layout.Header>
  )

}
