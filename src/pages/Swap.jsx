import React, { useEffect, useRef, useState } from 'react'
import Sidebar from '../components/Sidebar'
import { SquidWidget } from '@0xsquid/widget'

export default function Swap() {
    const [active, setActive] = useState(1)
    const [settings, setSettings] = useState(false)
    const [currencyOne, setCurrencyOne] = useState(false)
    const [currencyTwo, setCurrencyTwo] = useState(false)
    const [currencyDetails, setCurrencyDetails] = useState(false)
    const [swap, setSwap] = useState(false)

    let myRef = useRef(null);

    const currencyOneTableData = [
        { image: 'eth.svg', name: 'Ether', value: '10', symbol: 'ETH' },
        { image: 'eth.svg', name: 'Ether', value: '10', symbol: 'ETH' },
        { image: 'eth.svg', name: 'Ether', value: '10', symbol: 'ETH' },
        { image: 'eth.svg', name: 'Ether', value: '10', symbol: 'ETH' },
        { image: 'eth.svg', name: 'Ether', value: '10', symbol: 'ETH' },
    ]
    const currencyTwoTableData = [
        { image: 'btc.svg', name: 'BTC', value: '10', symbol: 'BTC' },
        { image: 'btc.svg', name: 'BTC', value: '10', symbol: 'BTC' },
        { image: 'btc.svg', name: 'BTC', value: '10', symbol: 'BTC' },
        { image: 'btc.svg', name: 'BTC', value: '10', symbol: 'BTC' },
        { image: 'btc.svg', name: 'BTC', value: '10', symbol: 'BTC' },
    ]
    const closeActive = () => {
        // if(settings){
        //     setSettings(false)
        // }
        // if(currencyOne){
        //     setCurrencyOne(false)
        // }
        // if(currencyTwo){
        //     setCurrencyTwo(false)
        // }
        if (currencyDetails) {
            setCurrencyDetails(false)
        }
    }
    return (
        <div className='swap' onClick={closeActive}>
            {/* sidebar */}
            <Sidebar />

            {/* main content */}
            <section className="main-content">
                <div className="container main">
                    <div className="App h-full w-full">
                        <SquidWidget config={
                            {
                                companyName: "SWITCH",
                                slippage: 1,
                                integratorId: "tiagate-swap-widget",
                                infiniteApproval: false,
                                instantExec: false,
                                apiUrl: "https://api.0xsquid.com",
                                priceImpactWarnings: {
                                    warning: 3,
                                    critical: 5,
                                },
                                initialFromChainId: 1,
                                initialToChainId: 56,
                                "style": {
                                    "neutralContent": "#9DA7B1",
                                    "baseContent": "#FFFDFD",
                                    "base100": "#434565",
                                    "base200": "#202230",
                                    "base300": "#161522",
                                    "error": "#ED6A5E",
                                    "warning": "#FFB155",
                                    "success": "#2EAEB0",
                                    "primary": "#AB67CB",
                                    "secondary": "#37394C",
                                    "secondaryContent": "#B2BCD3",
                                    "neutral": "#383A4C",
                                    "roundedBtn": "24px",
                                    "roundedCornerBtn": "999px",
                                    "roundedBox": "20px",
                                    "roundedDropDown": "0px"
                                },
                                // Mark fantom as not coming soon
                                // comingSoonChainIds: [
                                //     // Mainnet
                                //     42161,
                                //     56,
                                //     "cosmoshub-4",
                                //     "crescent-1",
                                //     "injective-1",
                                //     "juno-1",
                                //     "kaiyo-1",
                                //     "osmosis-1",
                                //     "secret-4",
                                //     "phoenix-1",
                                //     "agoric-3",
                                //     "mantle-1",
                                //     "axelar-dojo-1",
                                //     "comdex-1",
                                //     "evmos_9001-2",
                                //     "fetchhub-4",
                                //     "kichain-2",
                                //     "regen-1",
                                //     "umee-1",
                                // ],
                                // availableChains: {
                                //     source: ["celestia", 1],
                                //     destination: ["celestia", 1]
                                // }
                                availableChains: {
                                    source: [5, 421613, 420, 59140, 84531, 43113, 8001, 97, 4002, 5001, 1287, 534351],
                                    destination: [5, 421613, 420, 59140, 84531, 43113, 8001, 97, 4002, 5001, 1287, 534351]
                                },
                                // availableChains: {
                                //     source: ["celestia", 1, 56, 137, 43114, 42161, 10,8453, 59144, 5000, 534352, 250, 1284],
                                //     destination: ["celestia", 1, 56, 137, 43114, 42161, 10,8453, 59144, 5000, 534352, 250, 1284]
                                // },
                                collectFees: { 
                                    integratorAddress: "0xB529e98A626107335c634B4a905e8317d2250756", 
                                    fee: 30
                                }
                            }} />
                    </div>
                </div>
            </section>
        </div>
    )
}
