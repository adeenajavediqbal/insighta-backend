import mongoose from mongoose;

const quizSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
        },
        question: [{
            type: String,
        }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
    },
    class:{
        type: Number,
    },
    section:{
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    marks:{
        type:Number,
        default:10
    }
});

const QuizModel = mongoose.model('quiz', quizSchema);

export const createQuiz = (obj) => QuizModel.create(obj);
export const findQuiz = (query) => QuizModel.findOne(query);
export const updateQuiz = (query,update) => QuizModel.QuizModel.findOneAndUpdate(query,update,{new:true});
export const findQuizzes = (query) => QuizModel.find(query);