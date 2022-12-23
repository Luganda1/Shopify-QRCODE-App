import React from 'react'
import { EmptyState, Card } from "@shopify/polaris"

export function EmptyStateMarkup() {
  return (
    <Card sectioned>
    <EmptyState
      heading="I’m new to QR Codes. What should I do?"
      /* This button will take the user to a Create a QR code page */
      action={{
        content: "Create QR code",
        onAction: () => navigate("/qrcodes/new"),
      }}
      image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
    >
      <p>
          Glad you asked! Here’s a few basics to get you started.
      </p>
          <span><i>Create a QR code for your products </i>⬇️</span>
    </EmptyState>
  </Card>
  )
}

