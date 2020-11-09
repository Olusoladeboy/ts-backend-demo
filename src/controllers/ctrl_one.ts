import ErrorHandler from '../models/errorHandler'
class ControllerOne {
    // defaultMethod() {
    //     return {
    //         text: `You've reached the ${this.constructor.name} default method`
    //     }
    // }
    defaultMethod() {
        throw new ErrorHandler(501, 'Not implemented method');
    }
      
}

export = new ControllerOne();