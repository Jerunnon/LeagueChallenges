import React from 'react';
import Document, { Html, Head, Main, NextScript} from 'next/document';
import LoginModal from '@/ui/modals/login';

class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                <LoginModal />
                <body className='bg-light text-gray-500 dark:bg-space dark:text-white h-screen overflow-hidden'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
};

export default CustomDocument;