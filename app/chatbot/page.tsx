export default function Chatbot() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <iframe
        allow="microphone;"
        width="350"
        height="430"
        src="https://console.dialogflow.com/api-client/demo/embedded/429ce972-e535-41ec-a1ef-d8523463a1f2"
      />
    </div>
  )
}