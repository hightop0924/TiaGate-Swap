import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import { SquidWidget } from '@0xsquid/widget'

export default function Swap() {
    const [active, setActive] = useState(1)
    const [settings, setSettings] = useState(false)
    const [currencyOne, setCurrencyOne] = useState(false)
    const [currencyTwo, setCurrencyTwo] = useState(false)
    const [currencyDetails, setCurrencyDetails] = useState(false)
    const [swap, setSwap] = useState(false)
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
                    <div className="App" style={{ padding: "2rem", width: "auto", height: "auto" }}>
                        <SquidWidget config={
                            {
                                companyName: "TIAGate",
                                slippage: 1,
                                integratorId: "tiagate-swap-widget",
                                infiniteApproval: false,
                                instantExec: false,
                                apiUrl: "https://api.0xsquid.com",
                                priceImpactWarnings: {
                                    warning: 3,
                                    critical: 5,
                                },
                                initialFromChainId: 250,
                                initialToChainId: 1,
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
                                comingSoonChainIds: [
                                    // Mainnet
                                    42161,
                                    56,
                                    "cosmoshub-4",
                                    "crescent-1",
                                    "injective-1",
                                    "juno-1",
                                    "kaiyo-1",
                                    "osmosis-1",
                                    "secret-4",
                                    "phoenix-1",
                                    "agoric-3",
                                    "mantle-1",
                                    "axelar-dojo-1",
                                    "comdex-1",
                                    "evmos_9001-2",
                                    "fetchhub-4",
                                    "kichain-2",
                                    "regen-1",
                                    "umee-1",
                                ]
                            }} />
                    </div>
                </div>
            </section>
        </div>
    )
}
