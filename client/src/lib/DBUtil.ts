import Queue from "@/models/queue";
import Result from "@/models/results";

class DBUtil {
    static async isIdAvailable(id:string) {
        const queue = await Queue.findOne({ id: id }).exec();
        const result = await Result.findOne({ id: id }).exec();
    
        return !(queue || result)
    }
}

export default DBUtil;

