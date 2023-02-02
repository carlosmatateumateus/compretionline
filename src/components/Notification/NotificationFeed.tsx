interface NotificationFeedProps {
  author?: string,
  autorPhoto?: string,
  action: string,
  msg?: string,
  isRead?: boolean,
  productName?: string
}

const NotificationFeed = (props: NotificationFeedProps) => {
  return (
    <div className="text-[14px] flex border-t border-[#E4E8EE] p-2 gap-2">
      <img src={props.autorPhoto} alt={props.author} className="rounded-full w-[40px] h-[40px] border border-[#75AEE3]"/>
      <div>
        <p><strong className="font-medium text-[#1A1F36]">{props.author}</strong> {props.action}:</p>
        "
          {props.msg}
        "
      </div>
    </div>
  )
}

export default NotificationFeed;