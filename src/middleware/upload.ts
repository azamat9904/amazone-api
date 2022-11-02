import aws from 'aws-sdk'
import multer from 'multer'
import multer3 from 'multer-s3'

aws.config.update({
    accessKeyId: process.env.BUCKET_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.BUCKET_SECRET_KEY as string,
    region: 'eu-north-1',
})

const s3 = new aws.S3({ apiVersion: '2006-03-01' })

export const upload = multer({
    storage: multer3({
        // @ts-ignore
        s3: s3,
        acl: 'public-read',
        bucket: 'amazone-clone-app',
        key: function (req, file, cb) {
            cb(null, Date.now().toString())
        },
    }),
})
