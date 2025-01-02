import "./App.css";
import Header from "./components/Header";
import { PDFDownloadLink, Document, Page } from '@react-pdf/renderer';
import { Provider } from "../src/components/ui/provider.tsx";

function MyDoc() {
  return (
    <Document>
      <Page>
        <Provider>
          <Header />
        </Provider>
      </Page>
    </Document>
  )
};

export default function App() {
  return (
    <div>
      <Header />
      <PDFDownloadLink document={<MyDoc />} fileName="somename.pdf">
        Download
      </PDFDownloadLink>
    </div>
  )
};