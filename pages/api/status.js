export default function handler(req, res) {
  const status = () => {
    fetch('https://api.gofile.io/getServer')
      .then(response => response.json())
      .then(data => {
        if(data.status === 'ok') {
        res.status(200).json({ data })
        }
        res.status(500).json({ error : 'Server is down' })
      })
  }
  status()
}
