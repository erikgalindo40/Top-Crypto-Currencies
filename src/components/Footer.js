import React from 'react'
import Footerlist from './Footerlist'

function Footer() {
    const productFooterObject = {
        title: 'Products',
        productList: [
            'Blockchain Explorer',
            'Crypto API',
            'Crypto Indeces',
            'Jobs Board',
            'Site Map',
    ]
    }
    const companyFooterObject = {
        title: 'Company',
        productList: [
            `About Us`,
            `Terms of use`,
            `Privacy Policy`,
            `Community Rules`,
            `Disclaimer`,
            `Methodology`,
            `Careers`,
    ]
    }
    const supportFooterObject = {
        title: 'Support',
        productList: [
            `Request Form`,
            `Contact Support`,
            `FAQ`,
            `Glossary`,
            `Advertising`,
    ]
    }
    const socialsFooterObject = {
        title: 'Socials',
        productList: [
            `Facebook`,
            `Twitter`,
            `Telegram`,
            `Instagram`,
            `Interactive Chat`,
    ]
    }

  return (
    <footer className='footer-container'>
        <div className='footer-title'>
            Top Currencies
        </div>
        <div className='footer-lists'>
            <Footerlist title={productFooterObject.title} links={productFooterObject.productList}/>
            <Footerlist title={companyFooterObject.title} links={companyFooterObject.productList}/>
            <Footerlist title={supportFooterObject.title} links={supportFooterObject.productList}/>
            <Footerlist title={socialsFooterObject.title} links={socialsFooterObject.productList}/>
        </div>
    </footer>
  )
}

export default Footer