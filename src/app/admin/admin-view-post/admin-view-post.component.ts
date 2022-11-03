import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { UpdatePostRequest } from 'src/app/models/updatePostRequest.model';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-admin-view-post',
  templateUrl: './admin-view-post.component.html',
  styleUrls: ['./admin-view-post.component.css'],
})
export class AdminViewPostComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  post: Post | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');

      if (id) {
        this.postService.getPostById(id).subscribe((response) => {
          this.post = response;
        });
      }
    });
  }

  onSubmit(): void {
    const updatePostRequest: UpdatePostRequest = {
      author: this.post?.author,
      title: this.post?.title,
      content: this.post?.content,
      summary: this.post?.summary,
      featuredImageUrl: this.post?.featuredImageUrl,
      urlHandle: this.post?.urlHandle,
      updatedDate: this.post?.updatedDate,
      publishDate: this.post?.publishDate,
      isVisible: this.post?.isVisible,
    };

    this.postService
      .updatePost(this.post?.id, updatePostRequest)
      .subscribe((response) => {
        alert('Success!');
      });
  }
}
