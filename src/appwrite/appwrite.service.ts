import { Injectable } from "@nestjs/common";
import { Client, Databases, Account } from "appwrite";
import { CreateUserDto } from "src/auth/dto/create-user.dto";

@Injectable()
export class AppwriteService {
  private client: Client;
  private database: Databases;
  private account: Account;

  endpoint = process.env.APPWRITE_ENDPOINT || "default-endpoint";
  projectId = process.env.APPWRITE_PROJECT_ID || "default-project-id";
  apiKey = process.env.APPWRITE_API_KEY || "default-api-key";

  constructor() {
    this.client = new Client()
      .setEndpoint(this.endpoint)
      .setProject(this.projectId);
    this.client.headers["x-api-key"] = this.apiKey;
    this.database = new Databases(this.client);
    this.account = new Account(this.client);
  }

  async createDocument(collectionId: string, data: any): Promise<any> {
    try {
      const response = await this.database.createDocument(
        "your-database-id",
        collectionId,
        "unique()",
        data
      );
      return response;
    } catch (error) {
      throw error;
    }
  }

  async createUser(userData: CreateUserDto) {
    try {
      const response = await this.account.create(
        "unique()",
        userData.email,
        userData.password
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
}
