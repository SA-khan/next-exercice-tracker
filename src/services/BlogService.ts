import Mongoose from 'mongoose'
import MongoDb from 'mongodb'
import BlogSchema from '@/schemas/BlogSchema'
import { BlogModel } from '@/models/BlogModel'
import { Envelop } from '@/models/Envelop';

export default class BlogService {

    public async GetAll() {
        //var val = new BlogSchema();
        //var response = new Envelop(true, 1000001, await val.find());
        console.log('Get All!');
        //return response;
    }

    // public async GetById(id: number) {
    //     var val = new BlogSchema();
    //     var response = new Envelop(true, 1000001, await val.find({ blogId: id }));
    //     console.log('Get By Id!');
    //     return response;
    // }

    // public async Save(blog: BlogModel) {
    //     var response = new Envelop();
    //     var val = new BlogSchema ({ title: blog.title, description: blog.description });
    //     await val.Save();
    //     console.log('Saved!');
    //     return new Envelop ();
    // }

    // public async Remove(id: number) {
    //     var val = new BlogSchema();
    //     var val2 = await val.find(id);
    //     await val2.Remove(id);
    //     console.log('Removed!');
    //     return new Envelop ();
    // }

    public GetAllBlogs() : Envelop {
        var response = {
            isSuccessful: true,
            responseMessage: 1000001,
            content: [
                {
                    blogId: 1,
                    title: 'A walk to remember',
                    description: 'Documentary of a film',
                    isActive: true,
                    createdBy: 'man of action',
                    createdOn: '2023-02-27',
                    modifiedBy: 'no one',
                    modifiedOn: '2023-02-27',
                    version: 1,
                    isDeleted: false
                },
                {
                    blogId: 2,
                    title: 'Prince of persia',
                    description: 'the sand of time',
                    isActive: true,
                    createdBy: 'prince',
                    createdOn: '2023-02-27',
                    modifiedBy: 'no one',
                    modifiedOn: '2023-02-27',
                    version: 1,
                    isDeleted: false
                },
            ]
        }
        return response;
    }

}