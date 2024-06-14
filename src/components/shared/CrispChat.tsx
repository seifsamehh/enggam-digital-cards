const CrispChat = () => {
  const crispScript = `
      window.$crisp=[];
      window.CRISP_WEBSITE_ID="0d35a34f-5196-422f-9761-6f7aaf95b5de";
      (function(){
        var d=document;
        var s=d.createElement("script");
        s.src="https://client.crisp.chat/l.js";
        s.async=1;
        d.getElementsByTagName("head")[0].appendChild(s);
      })();
    `;

  return (
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{ __html: crispScript }}
    />
  );
};

export default CrispChat;
