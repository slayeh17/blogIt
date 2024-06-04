import conf from "../conf/conf";
import { Client, Storage } from "appwrite";

export class Storage_Service {
    client = new Client();
    storage;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.storage = new Storage(this.client);
    }

    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                conf.appwriteStorageId,
                ID.unique(),
                file
            );
        } catch (error) {
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile(conf.appwriteStorageId, fileId);
            return true;
        } catch (error) {
            return false;
        }
    }

    getFilePreview(fileId) {
        try {
            return this.storage.getFilePreview(conf.appwriteStorageId, fileId);
        } catch (error) {
            return false;
        }
    }
}

const storageService = new Storage_Service();
export default storageService;
