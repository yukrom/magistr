package com.bsuir.magistr.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;

import java.util.List;

/**
 * User: RomanYukhnevich
 * Date: 10/23/13
 * Time: 4:11 PM
 */

interface NewsControllerConstants {
    public final String INDEX_URL = "/index";
    public final String NEWS_URL = "/rest/newslist";
    public final String NEWS_REST_URL = "/rest/newslist/{id}";
    public final String COMMENTS_URL = "/rest/commentslist";
    public final String COMMENTS_REST_URL = "/rest/commentslist/{id}";
    public final String SEARCH_URL = "/search";

}

@Controller
public class NewsController implements NewsControllerConstants {
/*

    @Autowired
    private CommentService commentService;

    @Autowired
    private NewsService newsService;

    @RequestMapping(value= INDEX_URL,method = RequestMethod.GET)
    @ResponseStatus(HttpStatus.OK)
    @Secured({"ROLE_ADMIN","ROLE_USER","ROLE_GUEST"})
    public String index(Model model) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        String name = auth.getName();
        List<GrantedAuthority> role = (List)auth.getAuthorities();
        model.addAttribute("role", role.get(0).getAuthority());
        model.addAttribute("username", name);
        return "index";
    }

    @RequestMapping(value= NEWS_URL,method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @Secured({"ROLE_ADMIN","ROLE_USER","ROLE_GUEST"})
    @ResponseBody
    public CategorizedNewsWrapper getNews(@RequestParam(value = "category", required = true) String category, Integer limit, Integer start) {
        return new CategorizedNewsWrapper(newsService,category,newsService.getNewsByCategory(category,limit,start));
    }

    @RequestMapping(value= NEWS_REST_URL,method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @Secured("ROLE_ADMIN")
    public void createNews(@RequestBody News news) {
        newsService.add(news);
    }

    @RequestMapping(value= NEWS_REST_URL,method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @Secured("ROLE_ADMIN")
    public void updateNews(@RequestBody News news) {
        newsService.update(news);
    }

    @RequestMapping(value= NEWS_REST_URL,method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @Secured("ROLE_ADMIN")
    public void deleteNews(@PathVariable Integer id) {
        newsService.delete(id);
    }

    @RequestMapping(value= COMMENTS_URL,method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @Secured({"ROLE_ADMIN","ROLE_USER","ROLE_GUEST"})
    @ResponseBody
    public CommentsWrapper getComments(@RequestParam(value = "newsId", required = true) Integer newsId, Integer limit, Integer start) {
        return new CommentsWrapper(commentService, newsId, commentService.getCommentsByNewsId(newsId, limit, start));
    }

    @RequestMapping(value= COMMENTS_REST_URL,method = RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @Secured({"ROLE_ADMIN","ROLE_USER"})
    public void createComment(@RequestBody Comment comment) {
        commentService.add(comment);
    }

    @RequestMapping(value= COMMENTS_REST_URL,method = RequestMethod.PUT, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @Secured("ROLE_ADMIN")
    public void updateComment(@RequestBody Comment comment) {
        commentService.update(comment);
    }

    @RequestMapping(value= COMMENTS_REST_URL,method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @Secured("ROLE_ADMIN")
    public void deleteComment(@PathVariable Integer id) {
        commentService.delete(id);
    }

    @RequestMapping(value= SEARCH_URL,method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    @ResponseBody
    public UnCategorizedNewsWrapper search(String key,Integer limit, Integer start) {
        return new UnCategorizedNewsWrapper(newsService,newsService.search(key,limit,start));
    }
*/
}
