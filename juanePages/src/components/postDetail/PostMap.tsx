
export const PostMap: React.FC = () => {
    return (
        <div
            className="w-full h-50 mb-4"
        >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60180.96799227176!2d-70.78829085136712!3d19.4852727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eb1c5dea3d2fa2b%3A0x66bab257931c0e77!2sLovera%20Bar%20restaurant!5e0!3m2!1sen!2sdo!4v1741141675320!5m2!1sen!2sdo"
                width="100%"
                height="100%"
                className="rounded-2xl"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}