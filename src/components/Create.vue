<template>
    <div class="row justify-content-center mb-5">
        <div class="col">
            <div class="card card-default shadow">
                <div class="card-header">
                    <h4>Create a New Post</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent='addPost'>
                        <div class="row">
                            <div class="col col-md-6">
                                <div class="form-group">
                                    <label for="title-post">Post title:</label>
                                    <input type="text" id="title-post" autofocus class="form-control" v-model="post.title" required>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-md-6">
                                <div class="form-group">
                                    <label for="content-post">Post content:</label>
                                    <textarea type="text"  id="content-post" class="form-control"  v-model="post.content" required></textarea>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col col-md-6">
                                <div class="form-group ">
                                   <button type="submit" class="btn pl-4 pr-4 btn-vue mr-2"> Create</button> 
                                    <router-link to='/posts' class="btn  btn-danger">Cancel</router-link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() { 
        return { 
            post: {}
        }
    }, 
     created() {  
        setTimeout(()=> { 
            let textarea = document.querySelector('textarea')
           
            textarea.addEventListener('keydown', () => { 
                if(event.code === "ControlLeft") { 
                        textarea.addEventListener('keydown', () => { 
                            if(event.code === "Enter") {  
                                this.addPost()
                            }
                        })
                }
            })
        }, 0)
    },
    methods: { 
        addPost() { 
           const url = 'http://localhost:4000/posts/add'
           this.axios.post(url, this.post)
            .then( () => {
                this.$router.push({name: 'posts'})
            })
        }
        
    }
    
}
</script>