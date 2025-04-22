import {Layout} from 'antd';
import AppHeader from './components/layout/AppHeader'
import AppSider from './components/layout/AppSider'
import AppContent from './components/layout/AppContent'
import {CryptoContextProvider} from './context/crypto-context'

// const [coins, setCoin] = useState([]);
// export default function App() {
//   const testapi = async () => {
//     try {
//
//       const response = await apiClient.get('/api/v3/ticker/price');
//       setCoin(response.data);
//       return (
//         <div>
//           {coins.map(coin => (
//             <span>{coin.price}</span>
//           ))}
//         </div>
//       )
//
//     } catch (e) {
//       console.error(e)
//     }
//   }


// useEffect(() => {
//   testapi()
// }, [])
export default function App() {
  return (
    <CryptoContextProvider>
      <Layout>
        <AppHeader/>
        <Layout>
          <AppSider/>
          <AppContent/>
        </Layout>
      </Layout>
    </CryptoContextProvider>
  )

}
