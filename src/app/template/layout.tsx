import type { Metadata } from 'next'
import React from "react";
import {ProviderWrapper} from "@/redux/provider";

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function Layout({children}: {children: React.ReactNode}) {
  return (
      <>
          <p>template layout</p>
          {children}
      </>
  )
}
